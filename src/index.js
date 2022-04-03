import './utils/math'
import { tibetsheets } from './core'
import __firefox from './utils/polyfill'
import "uuid"

// window.uuid = uuid;
// import $ from "jquery"



// Prevent gulp warning: 'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification'
// window.evall = window.eval;
// polyfill event in firefox
if(window.addEventListener && (navigator.userAgent.indexOf("Firefox") > 0)){
    __firefox();
}

// use esbuild, bundle iife format
module.exports = window.tibetsheets = tibetsheets
