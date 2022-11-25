import './bootstrap';
import {
    createApp
} from 'vue';
import router from './router';
import app from './Layouts/App.vue';


// Helper User Class
import User from "./Helpers/User";
window.User = User;

// Helper Notifications Class
import Notifications from "./Helpers/Notifications";
window.Notifications = Notifications;


// Toaster
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;


// Sweet Alert
import Swal from 'sweetalert2';
window.Swal = Swal;



createApp(app)
    .use(router)
    .mount('#app')
