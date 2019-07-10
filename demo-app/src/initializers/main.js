import App from '../components/App.sfc';
import { onclick, oninput } from 'sham-ui-directives';

export default function() {
    new App( {
        ID: 'app',
        containerSelector: 'body',
        directives: {
            onclick,
            oninput
        }
    } );
}
