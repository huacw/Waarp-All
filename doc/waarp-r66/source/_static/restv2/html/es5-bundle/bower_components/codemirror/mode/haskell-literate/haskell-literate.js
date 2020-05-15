// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
(function(mod){if("object"==("undefined"===typeof exports?"undefined":babelHelpers.typeof(exports))&&"object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module)))// CommonJS
mod(require("../../lib/codemirror"),require("../haskell/haskell"));else if("function"==typeof define&&define.amd)// AMD
define(["../../lib/codemirror","../haskell/haskell"],mod);else// Plain browser env
mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("haskell-literate",function(config,parserConfig){var baseMode=CodeMirror.getMode(config,parserConfig&&parserConfig.base||"haskell");return{startState:function startState(){return{inCode:/* eat */ /* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */,baseState:CodeMirror.startState(baseMode)}},token:function token(stream,state){if(stream.sol()){if(state.inCode=stream.eat(">"))return"meta"}if(state.inCode){return baseMode.token(stream,state.baseState)}else{stream.skipToEnd();return"comment"}},innerMode:function innerMode(state){return state.inCode?{state:state.baseState,mode:baseMode}:null}}},"haskell");CodeMirror.defineMIME("text/x-literate-haskell","haskell-literate")});