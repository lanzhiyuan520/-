Component({
    externalClasses: [ "content-class" ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        showClose: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        onClose: function() {
            this.triggerEvent("OnClose");
        },
        onEmpty: function() {}
    }
});