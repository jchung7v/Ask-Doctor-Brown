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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Button */ \"./src/pages/component/Button.js\");\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ \"./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isShow, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleStart = ()=>{\n        setShow(!isShow);\n    };\n    const handleChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const responseAnswer = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.getAnswer)(transcript);\n            setAnswer(responseAnswer);\n            (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.textToSpeech)(responseAnswer);\n        } catch (error) {\n            console.error(\"An error occurred:\", error);\n        }\n    };\n    const handleReset = ()=>{\n        resetTranscript();\n        setAnswer(\"\");\n    };\n    const options = {\n        continuous: true,\n        language: \"en-CA\",\n        onError: (error)=>console.error(\"Speech Recognition Error:\", error)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isShow ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5 text-3xl\",\n                        children: \"Ask Doc Brown\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-5 text-center h-10\",\n                        type: \"text\",\n                        value: name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your first name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\",\n                        onClick: handleStart,\n                        text: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-l font-sans\",\n                            children: [\n                                \"Hello! \",\n                                name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                \"I am Doctor Brown.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                \"Ask Me Any Question.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pb-5 font-sans\",\n                            style: {\n                                color: listening ? \"green\" : \"red\"\n                            },\n                            children: listening ? \"Listening...\" : \"Microphone Off\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].startListening(options),\n                                    text: \"Start\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopListening,\n                                    text: \"Stop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: handleReset,\n                                    text: \"Reset\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            type: \"text\",\n                            value: transcript,\n                            placeholder: \"Press start to record your question or type it here...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"border block w-full mb-5 border-gray-400  rounded-lg  bg-white hover:shadow-md hover:border-opacity-0 font-sans  text-gray-700 text-m py-3\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: answer ? answer : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: \"Doc Brown's answer will appear here...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 115,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ta7rWbVoDE+AuSvaSZGJxXG21s0=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBU01BO0FBVHlCO0FBRVM7QUFDeUI7QUFHL0I7QUFDVTtBQUk3QixTQUFTUzs7SUFDdEIsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdOLDhFQUFvQkE7SUFDdkUsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsUUFBUUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFakMsTUFBTVksY0FBYztRQUNsQkgsUUFBUSxDQUFDRDtJQUNYO0lBQ0EsTUFBTUssZUFBZSxDQUFDQztRQUNwQkgsUUFBUUcsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBQ0EsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsaUJBQWlCLE1BQU10QiwrREFBU0EsQ0FBQ087WUFDdkNJLFVBQVVXO1lBQ1ZyQixrRUFBWUEsQ0FBQ3FCO1FBQ2YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3RDO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCaEI7UUFDQUUsVUFBVTtJQUNaO0lBRUEsTUFBTWUsVUFBVTtRQUNkQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsU0FBUyxDQUFDTixRQUFVQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtJQUNqRTtJQUVBLHFCQUNFLDhEQUFDTzs7WUFDRWxCLFNBQVMscUJBQ1IsOERBQUNrQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFnQjs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xiLE9BQU9OO3dCQUNQb0IsVUFBVWpCO3dCQUNWa0IsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDcEMseURBQU1BO3dCQUFDZ0MsV0FBVTt3QkFBR0ssU0FBU3BCO3dCQUFhcUIsTUFBSzs7Ozs7Ozs7Ozs7O1lBSW5EekIsdUJBQ0MsOERBQUNrQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQXdCO2dDQUM3QmpCOzhDQUNSLDhEQUFDd0I7Ozs7O2dDQUFROzhDQUNULDhEQUFDQTs7Ozs7Z0NBQVE7Ozs7Ozs7c0NBR1gsOERBQUNDOzRCQUNDUixXQUFVOzRCQUNWUyxPQUFPO2dDQUFFQyxPQUFPakMsWUFBWSxVQUFVOzRCQUFNO3NDQUUzQ0EsWUFBWSxpQkFBaUI7Ozs7OztzQ0FFaEMsOERBQUNzQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNoQyx5REFBTUE7b0NBQ0xxQyxTQUFTLElBQU1sQywrRUFBZ0MsQ0FBQ3dCO29DQUNoRFcsTUFBSzs7Ozs7OzhDQUVQLDhEQUFDdEMseURBQU1BO29DQUFDcUMsU0FBU2xDLDhFQUErQjtvQ0FBRW1DLE1BQUs7Ozs7Ozs4Q0FDdkQsOERBQUN0Qyx5REFBTUE7b0NBQUNxQyxTQUFTWDtvQ0FBYVksTUFBSzs7Ozs7Ozs7Ozs7O3NDQUdyQyw4REFBQ0w7NEJBQ0NELFdBQVU7NEJBQ1ZFLE1BQUs7NEJBQ0xiLE9BQU9iOzRCQUNQNEIsYUFBWTs7Ozs7O3NDQUdkLDhEQUFDUzs0QkFDQ1IsU0FBU2Y7NEJBQ1RVLFdBQVU7c0NBYVg7Ozs7OztzQ0FJRCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pyQixTQUNDQSx1QkFFQSw4REFBQ21DO2dDQUFLZCxXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU90Qzs7Ozs7OztBQUdWO0dBakh3QnpCOztRQUM2QkgsMEVBQW9CQTs7O0tBRGpERyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50L0J1dHRvblwiO1xuaW1wb3J0IHsgZ2V0QW5zd2VyLCB0ZXh0VG9TcGVlY2ggfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpU2VydmljZVwiO1xuaW1wb3J0IFNwZWVjaFJlY29nbml0aW9uLCB7XG4gIHVzZVNwZWVjaFJlY29nbml0aW9uLFxufSBmcm9tIFwicmVhY3Qtc3BlZWNoLXJlY29nbml0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB0cmFuc2NyaXB0LCBsaXN0ZW5pbmcsIHJlc2V0VHJhbnNjcmlwdCB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNTaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyghaXNTaG93KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZUFuc3dlciA9IGF3YWl0IGdldEFuc3dlcih0cmFuc2NyaXB0KTtcbiAgICAgIHNldEFuc3dlcihyZXNwb25zZUFuc3dlcik7XG4gICAgICB0ZXh0VG9TcGVlY2gocmVzcG9uc2VBbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRUcmFuc2NyaXB0KCk7XG4gICAgc2V0QW5zd2VyKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29udGludW91czogdHJ1ZSxcbiAgICBsYW5ndWFnZTogXCJlbi1DQVwiLFxuICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIlNwZWVjaCBSZWNvZ25pdGlvbiBFcnJvcjpcIiwgZXJyb3IpLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1Nob3cgPyBudWxsIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtM3hsXCI+QXNrIERvYyBCcm93bjwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlciBoLTEwXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17aGFuZGxlU3RhcnR9IHRleHQ9XCJTdGFydFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2lzU2hvdyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWwgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgIEhlbGxvISB7bmFtZX1cbiAgICAgICAgICAgICAgPGJyPjwvYnI+SSBhbSBEb2N0b3IgQnJvd24uXG4gICAgICAgICAgICAgIDxicj48L2JyPkFzayBNZSBBbnkgUXVlc3Rpb24uXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGItNSBmb250LXNhbnNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogbGlzdGVuaW5nID8gXCJncmVlblwiIDogXCJyZWRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGlzdGVuaW5nID8gXCJMaXN0ZW5pbmcuLi5cIiA6IFwiTWljcm9waG9uZSBPZmZcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU3BlZWNoUmVjb2duaXRpb24uc3RhcnRMaXN0ZW5pbmcob3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgdGV4dD1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtTcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nfSB0ZXh0PVwiU3RvcFwiIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9IHRleHQ9XCJSZXNldFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uU2hvdyBvdmVyZmxvdy1hdXRvIHctZnVsbCBibG9jayBib3gtYm9yZGVyIGJnLXdoaXRlIGgtMjQgcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBtYi01IHJvdW5kZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0cmFuc2NyaXB0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNzIHN0YXJ0IHRvIHJlY29yZCB5b3VyIHF1ZXN0aW9uIG9yIHR5cGUgaXQgaGVyZS4uLlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgICBtYi01XG4gICAgICAgICAgICAgIGJvcmRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgaG92ZXI6c2hhZG93LW1kXG4gICAgICAgICAgICAgIGhvdmVyOmJvcmRlci1vcGFjaXR5LTBcbiAgICAgICAgICAgICAgZm9udC1zYW5zIFxuICAgICAgICAgICAgICB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgIHRleHQtbVxuICAgICAgICAgICAgICBweS0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJTaG93IG92ZXJmbG93LWF1dG8gYm94LWJvcmRlciBiZy13aGl0ZSBoLTU2IHAtNCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgbWItNSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIHthbnN3ZXIgPyAoXG4gICAgICAgICAgICAgICAgYW5zd2VyXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgRG9jIEJyb3duJ3MgYW5zd2VyIHdpbGwgYXBwZWFyIGhlcmUuLi5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiQnV0dG9uIiwiZ2V0QW5zd2VyIiwidGV4dFRvU3BlZWNoIiwiU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTcGVlY2hSZWNvZ25pdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRyYW5zY3JpcHQiLCJsaXN0ZW5pbmciLCJyZXNldFRyYW5zY3JpcHQiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpc1Nob3ciLCJzZXRTaG93IiwibmFtZSIsInNldE5hbWUiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInJlc3BvbnNlQW5zd2VyIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUmVzZXQiLCJvcHRpb25zIiwiY29udGludW91cyIsImxhbmd1YWdlIiwib25FcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwidGV4dCIsImJyIiwicCIsInN0eWxlIiwiY29sb3IiLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});