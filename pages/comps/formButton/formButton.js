var e = require("../../../F0A6C17385D172BF96C0A9741E027533.js");

Component({
    externalClasses: [ "button-class" ],
    properties: {
        loading: Boolean,
        disabled: Boolean,
        openType: String
    },
    methods: {
        formSubmit: function(t) {
            var o = t.detail.formId;
            !(0, e.$isDevTools)() && o && getApp().collectFormId(o), this.triggerEvent("Click");
        }
    }
});