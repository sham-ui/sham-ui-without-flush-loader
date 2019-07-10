# sham-ui-without-flush-loader

> Loader without flush for sham-ui

## Install
```bash
# npm
npm install sham-ui-without-flush-loader
```

```bash
# yarn
yarn add sham-ui-without-flush-loader
```

## Usage
```html
{% import WithoutFlushLoader from 'sham-ui-without-flush-loader' %}
...
    {% if loaded %}
        Content loaded!
    {% else %}
        <WithoutFlushLoader 
            loadingComponent={{ComponentForLoading}}/>
    {% endif %}
...
