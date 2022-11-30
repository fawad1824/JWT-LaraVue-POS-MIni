<template>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Employees</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">Employees</li>
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

                    <br>
                    <input type="text" v-model="searchTeam" class="form-control" style="width:300px;"
                        placeholder="Search Here">
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
                                            <th>NID</th>
                                            <th>Joining Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="employee in filterSearch" :key="employee.id">
                                            <td>{{ employee.name }}</td>
                                            <td><img :src="employee.photo" id="em_photo"></td>
                                            <td>{{ employee.phone }}</td>
                                            <td>{{ employee.sallary }}</td>
                                            <td>{{ employee.nid }}</td>
                                            <td>{{ employee.date }}</td>
                                            <td>
                                                <router-link
                                                    :to="{ name: 'edit-employee', params: { id: employee.id } }"
                                                    style="margin: 3px;" class="btn btn-sm btn-primary">Edit
                                                </router-link>
                                                <a @click.prevent="DeleteEmployee(employee.id)" type="button"
                                                    style="margin: 3px;" href=""
                                                    class="btn btn-sm btn-danger">Delete</a>
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
            employees: [],
            searchTeam: "",
        }
    },

    computed: {
        filterSearch() {
            return this.employees.filter(employee => {
                if (employee.name.match(this.searchTeam)) {
                    return employee.name.match(this.searchTeam);
                } else if (employee.phone.match(this.searchTeam)) {
                    return employee.phone.match(this.searchTeam);
                } else if (employee.sallary.match(this.searchTeam)) {
                    return employee.sallary.match(this.searchTeam);
                }
            });
        }
    },
    methods: {
        allemployee() {
            axios.get('api/employee/')
                .then(({ data }) => (this.employees = data))
                .catch()
        },
        DeleteEmployee(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/employee/' + id)
                        .then(() => {
                            this.employees = this.employees.filter(employee => {
                                return employee.id != id
                            })
                        }).catch(() => {
                            this.$router.push({ name: 'AllEmp' })
                        })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
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
