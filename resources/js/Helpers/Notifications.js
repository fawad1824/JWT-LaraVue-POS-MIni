class Notifications {

    success() {
        new Noty({
            type: 'success',
            layout: "topRight",
            text: "SuccessFully Done!",
            timeout: 1000,
        }).show();
    }

    alert() {
        new Noty({
            type: 'alert',
            layout: "topRight",
            text: "Are You Sure?",
            timeout: 1000,
        }).show();
    }

    error() {
        new Noty({
            type: 'alert',
            layout: "topRight",
            text: "Something Went Wrong",
            timeout: 1000,
        }).show();
    }

    warning() {
        new Noty({
            type: 'alert',
            layout: "warning",
            text: "Opps Wrong",
            timeout: 1000,
        }).show();
    }

}
export default Notifications = new Notifications();
