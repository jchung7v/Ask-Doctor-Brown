"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Button */ \"./src/pages/component/Button.js\");\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ \"./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isShow, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleStart = ()=>{\n        setShow(!isShow);\n    };\n    const handleChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const responseAnswer = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.getAnswer)(transcript);\n            setAnswer(responseAnswer);\n            (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.textToSpeech)(responseAnswer);\n        } catch (error) {\n            console.error(\"An error occurred:\", error);\n        }\n    };\n    const handleReset = ()=>{\n        resetTranscript();\n        setAnswer(\"\");\n    };\n    const options = {\n        continuous: true,\n        language: \"en-CA\",\n        onError: (error)=>console.error(\"Speech Recognition Error:\", error)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isShow ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"./doctor_moustache.jpg\",\n                        width: 300,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-5 text-3xl\",\n                        children: \"Ask Dr. Moustache\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-5 text-center h-10\",\n                        type: \"text\",\n                        value: name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your first name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\",\n                        onClick: handleStart,\n                        text: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-l font-sans\",\n                            children: [\n                                \"Hi! \",\n                                name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                \"I am Doctor Moustache.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                \"Ask Me Any Question.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pb-5 font-sans\",\n                            style: {\n                                color: listening ? \"green\" : \"red\"\n                            },\n                            children: listening ? \"Listening...\" : \"Microphone Off\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].startListening(options),\n                                    text: \"Start\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopListening,\n                                    text: \"Stop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: handleReset,\n                                    text: \"Reset\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: transcript ? transcript : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: 'Press \"Start\" to record your question...'\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"border block w-full mb-5 border-gray-400  rounded-lg  bg-white hover:shadow-md hover:border-opacity-0 font-sans  text-gray-700 text-m py-3\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: answer ? answer : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: \"The answer will appear here...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ta7rWbVoDE+AuSvaSZGJxXG21s0=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudC9CdXR0b25cIjtcbmltcG9ydCB7IGdldEFuc3dlciwgdGV4dFRvU3BlZWNoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVNlcnZpY2VcIjtcbmltcG9ydCBTcGVlY2hSZWNvZ25pdGlvbiwge1xuICB1c2VTcGVlY2hSZWNvZ25pdGlvbixcbn0gZnJvbSBcInJlYWN0LXNwZWVjaC1yZWNvZ25pdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdHJhbnNjcmlwdCwgbGlzdGVuaW5nLCByZXNldFRyYW5zY3JpcHQgfSA9IHVzZVNwZWVjaFJlY29nbml0aW9uKCk7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFNob3coIWlzU2hvdyk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2VBbnN3ZXIgPSBhd2FpdCBnZXRBbnN3ZXIodHJhbnNjcmlwdCk7XG4gICAgICBzZXRBbnN3ZXIocmVzcG9uc2VBbnN3ZXIpO1xuICAgICAgdGV4dFRvU3BlZWNoKHJlc3BvbnNlQW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHJlc2V0VHJhbnNjcmlwdCgpO1xuICAgIHNldEFuc3dlcihcIlwiKTtcbiAgfTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbnRpbnVvdXM6IHRydWUsXG4gICAgbGFuZ3VhZ2U6IFwiZW4tQ0FcIixcbiAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJTcGVlY2ggUmVjb2duaXRpb24gRXJyb3I6XCIsIGVycm9yKSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aXNTaG93ID8gbnVsbCA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIuL2RvY3Rvcl9tb3VzdGFjaGUuanBnXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01IHRleHQtM3hsXCI+QXNrIERyLiBNb3VzdGFjaGU8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXIgaC0xMFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSB0ZXh0PVwiU3RhcnRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc1Nob3cgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1sIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICBIaSEge25hbWV9XG4gICAgICAgICAgICAgIDxicj48L2JyPkkgYW0gRG9jdG9yIE1vdXN0YWNoZS5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+QXNrIE1lIEFueSBRdWVzdGlvbi5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi01IGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBsaXN0ZW5pbmcgPyBcImdyZWVuXCIgOiBcInJlZFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaXN0ZW5pbmcgPyBcIkxpc3RlbmluZy4uLlwiIDogXCJNaWNyb3Bob25lIE9mZlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKX1cbiAgICAgICAgICAgICAgICB0ZXh0PVwiU3RhcnRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmd9IHRleHQ9XCJTdG9wXCIgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gdGV4dD1cIlJlc2V0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uU2hvdyBvdmVyZmxvdy1hdXRvIHctZnVsbCBibG9jayBib3gtYm9yZGVyIGJnLXdoaXRlIGgtMjQgcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBtYi01IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3RyYW5zY3JpcHQgPyAoXG4gICAgICAgICAgICAgICAgdHJhbnNjcmlwdFxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIFByZXNzIFwiU3RhcnRcIiB0byByZWNvcmQgeW91ciBxdWVzdGlvbi4uLlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgICBtYi01XG4gICAgICAgICAgICAgIGJvcmRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgaG92ZXI6c2hhZG93LW1kXG4gICAgICAgICAgICAgIGhvdmVyOmJvcmRlci1vcGFjaXR5LTBcbiAgICAgICAgICAgICAgZm9udC1zYW5zIFxuICAgICAgICAgICAgICB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgIHRleHQtbVxuICAgICAgICAgICAgICBweS0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJTaG93IG92ZXJmbG93LWF1dG8gYm94LWJvcmRlciBiZy13aGl0ZSBoLTU2IHAtNCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgbWItNSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIHthbnN3ZXIgPyAoXG4gICAgICAgICAgICAgICAgYW5zd2VyXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgVGhlIGFuc3dlciB3aWxsIGFwcGVhciBoZXJlLi4uXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsIkJ1dHRvbiIsImdldEFuc3dlciIsInRleHRUb1NwZWVjaCIsIlNwZWVjaFJlY29nbml0aW9uIiwidXNlU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJ0cmFuc2NyaXB0IiwibGlzdGVuaW5nIiwicmVzZXRUcmFuc2NyaXB0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaXNTaG93Iiwic2V0U2hvdyIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb25zZUFuc3dlciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVJlc2V0Iiwib3B0aW9ucyIsImNvbnRpbnVvdXMiLCJsYW5ndWFnZSIsIm9uRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwidGV4dCIsImJyIiwicCIsInN0eWxlIiwiY29sb3IiLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});