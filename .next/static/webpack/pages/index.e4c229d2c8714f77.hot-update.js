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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Button */ \"./src/pages/component/Button.js\");\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ \"./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isShow, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleStart = ()=>{\n        setShow(!isShow);\n    };\n    const handleChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const responseAnswer = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.getAnswer)(transcript);\n            setAnswer(responseAnswer);\n            (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.textToSpeech)(responseAnswer);\n        } catch (error) {\n            console.error(\"An error occurred:\", error);\n        }\n    };\n    const handleReset = ()=>{\n        resetTranscript();\n        setAnswer(\"\");\n    };\n    const options = {\n        continuous: true,\n        language: \"en-CA\",\n        onError: (error)=>console.error(\"Speech Recognition Error:\", error)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isShow ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"./doctor_moustache.jpg\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-5 text-3xl\",\n                        children: \"Ask Dr. Moustache\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-5 text-center h-10 bg-gray-100 rounded-lg border border-gray-400\",\n                        type: \"text\",\n                        value: name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your first name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\",\n                        onClick: handleStart,\n                        text: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-l font-sans\",\n                            children: [\n                                \"H there, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 24\n                                }, this),\n                                \"! \\uD83D\\uDE0A\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                \"It's me, Doctor Moustache.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                'Ready to chat? Just hit the \"Start\" button when you\\'re ready to ask your question. Done talking? Simply press \"Stop\". And hey, if you ever want a do-over, \"Reset\" is right there for you!'\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-5 pb-5 font-sans\",\n                            style: {\n                                color: listening ? \"green\" : \"red\"\n                            },\n                            children: listening ? \"Listening...\" : \"Microphone Off\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].startListening(options),\n                                    text: \"Start\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopListening,\n                                    text: \"Stop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: handleReset,\n                                    text: \"Reset\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"questionShow overflow-auto w-full block box-border bg-white h-32 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: transcript ? transcript : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: 'Press \"Start\" to record your question...'\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"border block w-full mb-5 border-gray-400  rounded-lg  bg-white hover:shadow-md hover:border-opacity-0 font-sans  text-gray-700 text-m py-3\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: answer ? answer : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: \"The answer will appear here...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 122,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ta7rWbVoDE+AuSvaSZGJxXG21s0=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SHdCekI7O1FBQzZCSCwwRUFBb0JBOzs7S0FEakRHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgeyBnZXRBbnN3ZXIsIHRleHRUb1NwZWVjaCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlXCI7XG5pbXBvcnQgU3BlZWNoUmVjb2duaXRpb24sIHtcbiAgdXNlU3BlZWNoUmVjb2duaXRpb24sXG59IGZyb20gXCJyZWFjdC1zcGVlY2gtcmVjb2duaXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHRyYW5zY3JpcHQsIGxpc3RlbmluZywgcmVzZXRUcmFuc2NyaXB0IH0gPSB1c2VTcGVlY2hSZWNvZ25pdGlvbigpO1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICBzZXRTaG93KCFpc1Nob3cpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlQW5zd2VyID0gYXdhaXQgZ2V0QW5zd2VyKHRyYW5zY3JpcHQpO1xuICAgICAgc2V0QW5zd2VyKHJlc3BvbnNlQW5zd2VyKTtcbiAgICAgIHRleHRUb1NwZWVjaChyZXNwb25zZUFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICByZXNldFRyYW5zY3JpcHQoKTtcbiAgICBzZXRBbnN3ZXIoXCJcIik7XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb250aW51b3VzOiB0cnVlLFxuICAgIGxhbmd1YWdlOiBcImVuLUNBXCIsXG4gICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiU3BlZWNoIFJlY29nbml0aW9uIEVycm9yOlwiLCBlcnJvciksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2lzU2hvdyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi9kb2N0b3JfbW91c3RhY2hlLmpwZ1wiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNSB0ZXh0LTN4bFwiPkFzayBEci4gTW91c3RhY2hlPC9kaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGgtMTAgYmctZ3JheS0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17aGFuZGxlU3RhcnR9IHRleHQ9XCJTdGFydFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2lzU2hvdyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWwgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgIEggdGhlcmUsIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntuYW1lfTwvc3Bhbj4hIPCfmIpcbiAgICAgICAgICAgICAgPGJyPjwvYnI+SXQncyBtZSwgRG9jdG9yIE1vdXN0YWNoZS5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+UmVhZHkgdG8gY2hhdD8gSnVzdCBoaXQgdGhlIFwiU3RhcnRcIiBidXR0b24gd2hlbiB5b3UncmVcbiAgICAgICAgICAgICAgcmVhZHkgdG8gYXNrIHlvdXIgcXVlc3Rpb24uIERvbmUgdGFsa2luZz8gU2ltcGx5IHByZXNzIFwiU3RvcFwiLiBBbmRcbiAgICAgICAgICAgICAgaGV5LCBpZiB5b3UgZXZlciB3YW50IGEgZG8tb3ZlciwgXCJSZXNldFwiIGlzIHJpZ2h0IHRoZXJlIGZvciB5b3UhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHBiLTUgZm9udC1zYW5zXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGxpc3RlbmluZyA/IFwiZ3JlZW5cIiA6IFwicmVkXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpc3RlbmluZyA/IFwiTGlzdGVuaW5nLi4uXCIgOiBcIk1pY3JvcGhvbmUgT2ZmXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNwZWVjaFJlY29nbml0aW9uLnN0YXJ0TGlzdGVuaW5nKG9wdGlvbnMpfVxuICAgICAgICAgICAgICAgIHRleHQ9XCJTdGFydFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17U3BlZWNoUmVjb2duaXRpb24uc3RvcExpc3RlbmluZ30gdGV4dD1cIlN0b3BcIiAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSB0ZXh0PVwiUmVzZXRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25TaG93IG92ZXJmbG93LWF1dG8gdy1mdWxsIGJsb2NrIGJveC1ib3JkZXIgYmctd2hpdGUgaC0zMiBwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIG1iLTUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICB7dHJhbnNjcmlwdCA/IChcbiAgICAgICAgICAgICAgICB0cmFuc2NyaXB0XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgUHJlc3MgXCJTdGFydFwiIHRvIHJlY29yZCB5b3VyIHF1ZXN0aW9uLi4uXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgdy1mdWxsXG4gICAgICAgICAgICAgIG1iLTVcbiAgICAgICAgICAgICAgYm9yZGVyLWdyYXktNDAwIFxuICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICBiZy13aGl0ZVxuICAgICAgICAgICAgICBob3ZlcjpzaGFkb3ctbWRcbiAgICAgICAgICAgICAgaG92ZXI6Ym9yZGVyLW9wYWNpdHktMFxuICAgICAgICAgICAgICBmb250LXNhbnMgXG4gICAgICAgICAgICAgIHRleHQtZ3JheS03MDBcbiAgICAgICAgICAgICAgdGV4dC1tXG4gICAgICAgICAgICAgIHB5LTNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlclNob3cgb3ZlcmZsb3ctYXV0byBib3gtYm9yZGVyIGJnLXdoaXRlIGgtNTYgcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBtYi01IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge2Fuc3dlciA/IChcbiAgICAgICAgICAgICAgICBhbnN3ZXJcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICBUaGUgYW5zd2VyIHdpbGwgYXBwZWFyIGhlcmUuLi5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiQnV0dG9uIiwiZ2V0QW5zd2VyIiwidGV4dFRvU3BlZWNoIiwiU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTcGVlY2hSZWNvZ25pdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRyYW5zY3JpcHQiLCJsaXN0ZW5pbmciLCJyZXNldFRyYW5zY3JpcHQiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpc1Nob3ciLCJzZXRTaG93IiwibmFtZSIsInNldE5hbWUiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInJlc3BvbnNlQW5zd2VyIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUmVzZXQiLCJvcHRpb25zIiwiY29udGludW91cyIsImxhbmd1YWdlIiwib25FcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJ0ZXh0Iiwic3BhbiIsImJyIiwiaHIiLCJwIiwic3R5bGUiLCJjb2xvciIsInN0YXJ0TGlzdGVuaW5nIiwic3RvcExpc3RlbmluZyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});