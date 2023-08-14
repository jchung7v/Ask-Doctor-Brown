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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Button */ \"./src/pages/component/Button.js\");\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ \"./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isShow, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleStart = ()=>{\n        setShow(!isShow);\n    };\n    const handleChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const responseAnswer = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.getAnswer)(transcript);\n            setAnswer(responseAnswer);\n            (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.textToSpeech)(responseAnswer);\n        } catch (error) {\n            console.error(\"An error occurred:\", error);\n        }\n    };\n    const handleReset = ()=>{\n        resetTranscript();\n        setAnswer(\"\");\n    };\n    const options = {\n        continuous: true,\n        language: \"en-CA\",\n        onError: (error)=>console.error(\"Speech Recognition Error:\", error)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isShow ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5 text-3xl\",\n                        children: \"Ask Dr. Moustache\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-5 text-center h-10\",\n                        type: \"text\",\n                        value: name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your first name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\",\n                        onClick: handleStart,\n                        text: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-l font-sans\",\n                            children: [\n                                \"Hi! \",\n                                name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                \"I am Doctor Moustache.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                \"Ask Me Any Question.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pb-5 font-sans\",\n                            style: {\n                                color: listening ? \"green\" : \"red\"\n                            },\n                            children: listening ? \"Listening...\" : \"Microphone Off\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].startListening(options),\n                                    text: \"Start\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopListening,\n                                    text: \"Stop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: handleReset,\n                                    text: \"Reset\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: transcript ? transcript : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: 'Press \"Start\" to record your question...'\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"border block w-full mb-5 border-gray-400  rounded-lg  bg-white hover:shadow-md hover:border-opacity-0 font-sans  text-gray-700 text-m py-3\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: answer ? answer : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: \"The answer will appear here...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ta7rWbVoDE+AuSvaSZGJxXG21s0=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBU01BO0FBVHlCO0FBRVM7QUFDeUI7QUFHL0I7QUFDVTtBQUk3QixTQUFTUzs7SUFDdEIsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdOLDhFQUFvQkE7SUFDdkUsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsUUFBUUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFakMsTUFBTVksY0FBYztRQUNsQkgsUUFBUSxDQUFDRDtJQUNYO0lBQ0EsTUFBTUssZUFBZSxDQUFDQztRQUNwQkgsUUFBUUcsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBQ0EsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsaUJBQWlCLE1BQU10QiwrREFBU0EsQ0FBQ087WUFDdkNJLFVBQVVXO1lBQ1ZyQixrRUFBWUEsQ0FBQ3FCO1FBQ2YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3RDO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCaEI7UUFDQUUsVUFBVTtJQUNaO0lBRUEsTUFBTWUsVUFBVTtRQUNkQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsU0FBUyxDQUFDTixRQUFVQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtJQUNqRTtJQUVBLHFCQUNFLDhEQUFDTzs7WUFDRWxCLFNBQVMscUJBQ1IsOERBQUNrQjtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFnQjs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xiLE9BQU9OO3dCQUNQb0IsVUFBVWpCO3dCQUNWa0IsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDcEMseURBQU1BO3dCQUFDZ0MsV0FBVTt3QkFBR0ssU0FBU3BCO3dCQUFhcUIsTUFBSzs7Ozs7Ozs7Ozs7O1lBSW5EekIsdUJBQ0MsOERBQUNrQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQXdCO2dDQUNoQ2pCOzhDQUNMLDhEQUFDd0I7Ozs7O2dDQUFROzhDQUNULDhEQUFDQTs7Ozs7Z0NBQVE7Ozs7Ozs7c0NBR1gsOERBQUNDOzRCQUNDUixXQUFVOzRCQUNWUyxPQUFPO2dDQUFFQyxPQUFPakMsWUFBWSxVQUFVOzRCQUFNO3NDQUUzQ0EsWUFBWSxpQkFBaUI7Ozs7OztzQ0FFaEMsOERBQUNzQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNoQyx5REFBTUE7b0NBQ0xxQyxTQUFTLElBQU1sQywrRUFBZ0MsQ0FBQ3dCO29DQUNoRFcsTUFBSzs7Ozs7OzhDQUVQLDhEQUFDdEMseURBQU1BO29DQUFDcUMsU0FBU2xDLDhFQUErQjtvQ0FBRW1DLE1BQUs7Ozs7Ozs4Q0FDdkQsOERBQUN0Qyx5REFBTUE7b0NBQUNxQyxTQUFTWDtvQ0FBYVksTUFBSzs7Ozs7Ozs7Ozs7O3NDQUdyQyw4REFBQ1A7NEJBQUlDLFdBQVU7c0NBQ1p4QixhQUNDQSwyQkFFQSw4REFBQ3FDO2dDQUFLYixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7c0NBTXBDLDhEQUFDYzs0QkFDQ1QsU0FBU2Y7NEJBQ1RVLFdBQVU7c0NBYVg7Ozs7OztzQ0FJRCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pyQixTQUNDQSx1QkFFQSw4REFBQ2tDO2dDQUFLYixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU90Qzs7Ozs7OztBQUdWO0dBckh3QnpCOztRQUM2QkgsMEVBQW9CQTs7O0tBRGpERyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50L0J1dHRvblwiO1xuaW1wb3J0IHsgZ2V0QW5zd2VyLCB0ZXh0VG9TcGVlY2ggfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpU2VydmljZVwiO1xuaW1wb3J0IFNwZWVjaFJlY29nbml0aW9uLCB7XG4gIHVzZVNwZWVjaFJlY29nbml0aW9uLFxufSBmcm9tIFwicmVhY3Qtc3BlZWNoLXJlY29nbml0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB0cmFuc2NyaXB0LCBsaXN0ZW5pbmcsIHJlc2V0VHJhbnNjcmlwdCB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNTaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyghaXNTaG93KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZUFuc3dlciA9IGF3YWl0IGdldEFuc3dlcih0cmFuc2NyaXB0KTtcbiAgICAgIHNldEFuc3dlcihyZXNwb25zZUFuc3dlcik7XG4gICAgICB0ZXh0VG9TcGVlY2gocmVzcG9uc2VBbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRUcmFuc2NyaXB0KCk7XG4gICAgc2V0QW5zd2VyKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29udGludW91czogdHJ1ZSxcbiAgICBsYW5ndWFnZTogXCJlbi1DQVwiLFxuICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIlNwZWVjaCBSZWNvZ25pdGlvbiBFcnJvcjpcIiwgZXJyb3IpLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1Nob3cgPyBudWxsIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtM3hsXCI+QXNrIERyLiBNb3VzdGFjaGU8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXIgaC0xMFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSB0ZXh0PVwiU3RhcnRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc1Nob3cgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1sIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICBIaSEge25hbWV9XG4gICAgICAgICAgICAgIDxicj48L2JyPkkgYW0gRG9jdG9yIE1vdXN0YWNoZS5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+QXNrIE1lIEFueSBRdWVzdGlvbi5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi01IGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBsaXN0ZW5pbmcgPyBcImdyZWVuXCIgOiBcInJlZFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaXN0ZW5pbmcgPyBcIkxpc3RlbmluZy4uLlwiIDogXCJNaWNyb3Bob25lIE9mZlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKX1cbiAgICAgICAgICAgICAgICB0ZXh0PVwiU3RhcnRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmd9IHRleHQ9XCJTdG9wXCIgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gdGV4dD1cIlJlc2V0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uU2hvdyBvdmVyZmxvdy1hdXRvIHctZnVsbCBibG9jayBib3gtYm9yZGVyIGJnLXdoaXRlIGgtMjQgcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBtYi01IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3RyYW5zY3JpcHQgPyAoXG4gICAgICAgICAgICAgICAgdHJhbnNjcmlwdFxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIFByZXNzIFwiU3RhcnRcIiB0byByZWNvcmQgeW91ciBxdWVzdGlvbi4uLlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgICBtYi01XG4gICAgICAgICAgICAgIGJvcmRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgaG92ZXI6c2hhZG93LW1kXG4gICAgICAgICAgICAgIGhvdmVyOmJvcmRlci1vcGFjaXR5LTBcbiAgICAgICAgICAgICAgZm9udC1zYW5zIFxuICAgICAgICAgICAgICB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgIHRleHQtbVxuICAgICAgICAgICAgICBweS0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJTaG93IG92ZXJmbG93LWF1dG8gYm94LWJvcmRlciBiZy13aGl0ZSBoLTU2IHAtNCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgbWItNSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIHthbnN3ZXIgPyAoXG4gICAgICAgICAgICAgICAgYW5zd2VyXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgVGhlIGFuc3dlciB3aWxsIGFwcGVhciBoZXJlLi4uXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsIkJ1dHRvbiIsImdldEFuc3dlciIsInRleHRUb1NwZWVjaCIsIlNwZWVjaFJlY29nbml0aW9uIiwidXNlU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJ0cmFuc2NyaXB0IiwibGlzdGVuaW5nIiwicmVzZXRUcmFuc2NyaXB0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaXNTaG93Iiwic2V0U2hvdyIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb25zZUFuc3dlciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVJlc2V0Iiwib3B0aW9ucyIsImNvbnRpbnVvdXMiLCJsYW5ndWFnZSIsIm9uRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInRleHQiLCJiciIsInAiLCJzdHlsZSIsImNvbG9yIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});