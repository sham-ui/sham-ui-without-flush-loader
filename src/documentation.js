/**
 * Options for WithoutFlushLoader
 * @typedef {Object} WithoutFlushLoaderOptions
 * @property {Object} loadingComponent Component for loading indicator
 * @property {number} delay Delay (ms) before REAL show loadingComponent. Default 100
 */

/**
 * Loader without flush for sham-ui
 * @class WithoutFlushLoader
 * @classdesc
 * @property {WithoutFlushLoaderOptions} options
 * @example
 * {% import WithoutFlushLoader from 'sham-ui-without-flush-loader' %}
 * ...
 *   {% if loaded %}
 *     Content loaded!
 *   {% else %}
 *     <WithoutFlushLoader
 *       loadingComponent={{ComponentForLoading}}/>
 *   {% endif %}
 * ...
 */
