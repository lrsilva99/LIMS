webpackJsonp([2,3],{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/content/css/global.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* ==============================================================\nBootstrap tweaks\n===============================================================*/\n\nbody, h1, h2, h3, h4 {\n    font-weight: 300;\n}\n\n/* ==========================================================================\nBrowser Upgrade Prompt\n========================================================================== */\n.browserupgrade {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n/* ==========================================================================\nGeneric styles\n========================================================================== */\n\n/* Error highlight on input fields */\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid green;\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid red;\n}\n\n/* other generic styles */\n\n.card {\n    padding: 1.5%;\n    margin-top: 20px;\n    border: none;\n}\n\n.error {\n    color: white;\n    background-color: red;\n}\n\n.pad {\n    padding: 10px;\n}\n\n.break {\n    white-space: normal;\n    word-break:break-all;\n}\n\n.voffset  { margin-top: 2px; }\n.voffset1 { margin-top: 5px; }\n.voffset2 { margin-top: 10px; }\n.voffset3 { margin-top: 15px; }\n.voffset4 { margin-top: 30px; }\n.voffset5 { margin-top: 40px; }\n.voffset6 { margin-top: 60px; }\n.voffset7 { margin-top: 80px; }\n.voffset8 { margin-top: 100px; }\n.voffset9 { margin-top: 150px; }\n\n.readonly {\n    background-color: #eee;\n    opacity: 1;\n}\n\n/*FIXME this is to support grids in table class; */\ntable td[class*=col-], table th[class*=col-] {\n    position: static;\n    display: table-cell;\n    float: none;\n}\n\n.footer {\n    border-top: 1px solid rgba(0,0,0,.125);\n}\n\n/* ==========================================================================\nmake sure browsers use the pointer cursor for anchors, even with no href\n========================================================================== */\na:hover {\n  cursor: pointer;\n}\n\n.hand {\n    cursor: pointer;\n}\n\n/* ==========================================================================\nCustom alerts for notification\n========================================================================== */\n.alerts .alert{\n    text-overflow: ellipsis;\n}\n.alert pre{\n    background: none;\n    border: none;\n    font: inherit;\n    color: inherit;\n    padding: 0;\n    margin: 0;\n}\n\n.alert .popover pre {\n    font-size: 10px;\n}\n\n.alerts .toast {\n    position: fixed;\n    width: 100%;\n}\n\n.alerts .toast.left {\n    left: 5px;\n}\n\n.alerts .toast.right {\n    right: 5px;\n}\n\n.alerts .toast.top {\n    top: 55px;\n}\n\n.alerts .toast.bottom {\n    bottom: 55px;\n}\n\n@media screen and (min-width: 480px) {\n    .alerts .toast {\n        width: 50%;\n    }\n}\n\n/* ==========================================================================\nentity tables helpers\n========================================================================== */\n/* Remove Bootstrap padding from the element\n   http://stackoverflow.com/questions/19562903/remove-padding-from-columns-in-bootstrap-3 */\n.no-padding-left { padding-left: 0 !important; }\n.no-padding-right { padding-right: 0 !important; }\n.no-padding-top { padding-top: 0 !important; }\n.no-padding-bottom { padding-bottom: 0 !important; }\n.no-padding { padding: 0 !important; }\n\n/* bootstrap 3 input-group 100% width\n   http://stackoverflow.com/questions/23436430/bootstrap-3-input-group-100-width */\n.width-min { width: 1% !important; }\n\n/* Makes toolbar not wrap on smaller screens\n http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#right */\n.flex-btn-group-container {\n   display: -webkit-flex;\n   display: flex;\n   -webkit-flex-direction: row;\n   flex-direction: row;\n   -webkit-justify-content: flex-end;\n   justify-content: flex-end;\n}\n\n/* ==========================================================================\nentity detail page css\n========================================================================== */\n.row.jh-entity-details > dd {\n    margin-bottom: 15px;\n}\n\n@media screen and (min-width: 768px) {\n    .row.jh-entity-details > dt {\n        margin-bottom: 15px;\n    }\n\n    .row.jh-entity-details > dd {\n        border-bottom: 1px solid #eee;\n        padding-left: 180px;\n        margin-left: 0;\n    }\n}\n\n/* ==========================================================================\nui bootstrap tweaks\n========================================================================== */\n.nav, .pagination, .carousel, .panel-title a {\n    cursor: pointer;\n}\n\n.datetime-picker-dropdown > li.date-picker-menu div > table .btn-default,\n.uib-datepicker-popup  > li > div.uib-datepicker > table .btn-default {\n    border: 0;\n}\n\n.datetime-picker-dropdown > li.date-picker-menu div > table:focus,\n.uib-datepicker-popup  > li > div.uib-datepicker > table:focus {\n    outline: none;\n}\n\n/* jhipster-needle-css-add-main JHipster will add new css style */\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/content/css/global.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/content/css/global.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(14)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./global.css", function() {
			var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./global.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(860);

/***/ })

},["./src/main/webapp/content/css/global.css"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9jc3MvZ2xvYmFsLmNzcz9iOTI1Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSx5TUFBME0sdUJBQXVCLEdBQUcsMk1BQTJNLHNCQUFzQix1QkFBdUIsa0JBQWtCLHVCQUF1QixHQUFHLHFRQUFxUSxpQ0FBaUMsR0FBRyw0QkFBNEIsK0JBQStCLEdBQUcseUNBQXlDLG9CQUFvQix1QkFBdUIsbUJBQW1CLEdBQUcsWUFBWSxtQkFBbUIsNEJBQTRCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxZQUFZLDBCQUEwQiwyQkFBMkIsR0FBRyxlQUFlLGlCQUFpQixFQUFFLGFBQWEsaUJBQWlCLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxhQUFhLGtCQUFrQixFQUFFLGFBQWEsa0JBQWtCLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxhQUFhLGtCQUFrQixFQUFFLGFBQWEsa0JBQWtCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGVBQWUsNkJBQTZCLGlCQUFpQixHQUFHLG9EQUFvRCxtREFBbUQsdUJBQXVCLDBCQUEwQixrQkFBa0IsR0FBRyxhQUFhLDZDQUE2QyxHQUFHLHFQQUFxUCxvQkFBb0IsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGlOQUFpTiw4QkFBOEIsR0FBRyxhQUFhLHVCQUF1QixtQkFBbUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEdBQUcseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0Isa0JBQWtCLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLDBCQUEwQixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDBDQUEwQyxzQkFBc0IscUJBQXFCLE9BQU8sR0FBRyx1VkFBdVYsNEJBQTRCLEVBQUUscUJBQXFCLDZCQUE2QixFQUFFLG1CQUFtQiwyQkFBMkIsRUFBRSxzQkFBc0IsOEJBQThCLEVBQUUsZUFBZSx1QkFBdUIsRUFBRSw0SUFBNEksc0JBQXNCLEVBQUUsc0pBQXNKLDJCQUEyQixtQkFBbUIsaUNBQWlDLHlCQUF5Qix1Q0FBdUMsK0JBQStCLEdBQUcsdU5BQXVOLDBCQUEwQixHQUFHLDBDQUEwQyxtQ0FBbUMsOEJBQThCLE9BQU8scUNBQXFDLHdDQUF3Qyw4QkFBOEIseUJBQXlCLE9BQU8sR0FBRyxxT0FBcU8sc0JBQXNCLEdBQUcsc0pBQXNKLGdCQUFnQixHQUFHLHdJQUF3SSxvQkFBb0IsR0FBRzs7QUFFMTNKOzs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBLCtDIiwiZmlsZSI6Imdsb2JhbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuQm9vdHN0cmFwIHR3ZWFrc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuXFxuYm9keSwgaDEsIGgyLCBoMywgaDQge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkJyb3dzZXIgVXBncmFkZSBQcm9tcHRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5icm93c2VydXBncmFkZSB7XFxuICAgIG1hcmdpbjogMC4yZW0gMDtcXG4gICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuR2VuZXJpYyBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIEVycm9yIGhpZ2hsaWdodCBvbiBpbnB1dCBmaWVsZHMgKi9cXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XFxufVxcblxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qIG90aGVyIGdlbmVyaWMgc3R5bGVzICovXFxuXFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiAxLjUlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucGFkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJyZWFrIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XFxufVxcblxcbi52b2Zmc2V0ICB7IG1hcmdpbi10b3A6IDJweDsgfVxcbi52b2Zmc2V0MSB7IG1hcmdpbi10b3A6IDVweDsgfVxcbi52b2Zmc2V0MiB7IG1hcmdpbi10b3A6IDEwcHg7IH1cXG4udm9mZnNldDMgeyBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuLnZvZmZzZXQ0IHsgbWFyZ2luLXRvcDogMzBweDsgfVxcbi52b2Zmc2V0NSB7IG1hcmdpbi10b3A6IDQwcHg7IH1cXG4udm9mZnNldDYgeyBtYXJnaW4tdG9wOiA2MHB4OyB9XFxuLnZvZmZzZXQ3IHsgbWFyZ2luLXRvcDogODBweDsgfVxcbi52b2Zmc2V0OCB7IG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuLnZvZmZzZXQ5IHsgbWFyZ2luLXRvcDogMTUwcHg7IH1cXG5cXG4ucmVhZG9ubHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKkZJWE1FIHRoaXMgaXMgdG8gc3VwcG9ydCBncmlkcyBpbiB0YWJsZSBjbGFzczsgKi9cXG50YWJsZSB0ZFtjbGFzcyo9Y29sLV0sIHRhYmxlIHRoW2NsYXNzKj1jb2wtXSB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIGZsb2F0OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxubWFrZSBzdXJlIGJyb3dzZXJzIHVzZSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvcnMsIGV2ZW4gd2l0aCBubyBocmVmXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5hOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhhbmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuQ3VzdG9tIGFsZXJ0cyBmb3Igbm90aWZpY2F0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYWxlcnRzIC5hbGVydHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5hbGVydCBwcmV7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmFsZXJ0IC5wb3BvdmVyIHByZSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmFsZXJ0cyAudG9hc3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWxlcnRzIC50b2FzdC5sZWZ0IHtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4uYWxlcnRzIC50b2FzdC5yaWdodCB7XFxuICAgIHJpZ2h0OiA1cHg7XFxufVxcblxcbi5hbGVydHMgLnRvYXN0LnRvcCB7XFxuICAgIHRvcDogNTVweDtcXG59XFxuXFxuLmFsZXJ0cyAudG9hc3QuYm90dG9tIHtcXG4gICAgYm90dG9tOiA1NXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAuYWxlcnRzIC50b2FzdCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuZW50aXR5IHRhYmxlcyBoZWxwZXJzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBSZW1vdmUgQm9vdHN0cmFwIHBhZGRpbmcgZnJvbSB0aGUgZWxlbWVudFxcbiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk1NjI5MDMvcmVtb3ZlLXBhZGRpbmctZnJvbS1jb2x1bW5zLWluLWJvb3RzdHJhcC0zICovXFxuLm5vLXBhZGRpbmctbGVmdCB7IHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyB9XFxuLm5vLXBhZGRpbmctcmlnaHQgeyBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cXG4ubm8tcGFkZGluZy10b3AgeyBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9XFxuLm5vLXBhZGRpbmctYm90dG9tIHsgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgfVxcbi5uby1wYWRkaW5nIHsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XFxuXFxuLyogYm9vdHN0cmFwIDMgaW5wdXQtZ3JvdXAgMTAwJSB3aWR0aFxcbiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM0MzY0MzAvYm9vdHN0cmFwLTMtaW5wdXQtZ3JvdXAtMTAwLXdpZHRoICovXFxuLndpZHRoLW1pbiB7IHdpZHRoOiAxJSAhaW1wb3J0YW50OyB9XFxuXFxuLyogTWFrZXMgdG9vbGJhciBub3Qgd3JhcCBvbiBzbWFsbGVyIHNjcmVlbnNcXG4gaHR0cDovL3d3dy5za2V0Y2hpbmd3aXRoY3NzLmNvbS9zYW1wbGVjaGFwdGVyL2NoZWF0c2hlZXQuaHRtbCNyaWdodCAqL1xcbi5mbGV4LWJ0bi1ncm91cC1jb250YWluZXIge1xcbiAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbmVudGl0eSBkZXRhaWwgcGFnZSBjc3NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yb3cuamgtZW50aXR5LWRldGFpbHMgPiBkZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yb3cuamgtZW50aXR5LWRldGFpbHMgPiBkdCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5yb3cuamgtZW50aXR5LWRldGFpbHMgPiBkZCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTgwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbnVpIGJvb3RzdHJhcCB0d2Vha3NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXYsIC5wYWdpbmF0aW9uLCAuY2Fyb3VzZWwsIC5wYW5lbC10aXRsZSBhIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGF0ZXRpbWUtcGlja2VyLWRyb3Bkb3duID4gbGkuZGF0ZS1waWNrZXItbWVudSBkaXYgPiB0YWJsZSAuYnRuLWRlZmF1bHQsXFxuLnVpYi1kYXRlcGlja2VyLXBvcHVwICA+IGxpID4gZGl2LnVpYi1kYXRlcGlja2VyID4gdGFibGUgLmJ0bi1kZWZhdWx0IHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uZGF0ZXRpbWUtcGlja2VyLWRyb3Bkb3duID4gbGkuZGF0ZS1waWNrZXItbWVudSBkaXYgPiB0YWJsZTpmb2N1cyxcXG4udWliLWRhdGVwaWNrZXItcG9wdXAgID4gbGkgPiBkaXYudWliLWRhdGVwaWNrZXIgPiB0YWJsZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIGpoaXBzdGVyLW5lZWRsZS1jc3MtYWRkLW1haW4gSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IGNzcyBzdHlsZSAqL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvY3NzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9jc3MvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvY3NzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvY3NzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg1KSkoODYwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9