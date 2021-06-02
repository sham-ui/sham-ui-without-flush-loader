import renderer, { compile } from 'sham-ui-test-helpers';
import WithoutFlushLoader from '../../src/without-flush-loader.sfc';

jest.useFakeTimers();

it( 'renders correctly', () => {
    const meta = renderer( WithoutFlushLoader, {
        loadingComponent: compile`Loading...`
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.component.container.textContent ).toBe( '' );

    jest.runAllTimers();

    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.component.container.textContent ).toBe( 'Loading...' );
} );

it( 'example from README', () => {
    const meta = renderer(
        compile( {
            WithoutFlushLoader
        } )`
            {% if loaded %}
                Content loaded!
            {% else %}
                <WithoutFlushLoader 
                    loadingComponent={{ComponentForLoading}}/>
            {% endif %}
        `
        ,
        {
            loaded: false,
            ComponentForLoading: compile`Loading...`
        }
    );
    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.component.container.textContent ).toBe( '' );
    meta.component.update( {
        loaded: true
    } );
    expect( meta.component.container.textContent ).toBe( ' Content loaded! ' );
    meta.component.update( {
        loaded: false
    } );
    expect( meta.component.container.textContent ).toBe( '' );

    jest.runAllTimers();
    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.component.container.textContent ).toBe( 'Loading...' );
} );
