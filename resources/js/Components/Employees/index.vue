<template>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">All Employees</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="./">Home</a></li>
            <li class="breadcrumb-item">All Employees</li>
            <li class="breadcrumb-item active" aria-current="page">Create Employees</li>
        </ol>
    </div>

    <div class="row pb-3">
        <div class="col-lg-3">
            <router-link to="/add-emp" class="btn btn-primary">Create Employee</router-link>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">All Employees</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12 mb-4">
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Photo</th>
                                            <th>Phone</th>
                                            <th>Sallary</th>
                                            <th>Joining Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="employee in employees" :key="employee.id">
                                            <td>{{ employee.name }}</td>
                                            <td><img :src="employee.photo" id="em_photo"></td>
                                            <td>{{ employee.phone }}</td>
                                            <td>{{ employee.sallary }}</td>
                                            <td>{{ employee.date }}</td>
                                            <td>
                                                <a @click.prevent="EditEmployee" type="button" style="margin: 3px;"
                                                    href="" class="btn btn-sm btn-primary">Edit</a>
                                                <a @click.prevent="DeleteEmployee" type="button" style="margin: 3px;"
                                                    href="" class="btn btn-sm btn-danger">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: 'Login' })
        }
    },
    data() {
        return {
            employees: []
        }
    },
    methods: {
        allemployee() {
            axios.get('api/employee/')
                .then(({ data }) => (this.employees = data))
                .catch()
        },
        EditEmployee() {
            alert("edit")
        },
        DeleteEmployee() {
            alert("delete");
        }
    },
    created() {
        this.allemployee();
    }
}
</script>

<style>
#em_photo {
    height: 40px;
    width: 40px;
}
</style>
