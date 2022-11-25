<template>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Employees</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="./">Home</a></li>
            <li class="breadcrumb-item">Employees</li>
            <li class="breadcrumb-item active" aria-current="page">Create Employees</li>
        </ol>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Create Employees</h6>
                </div>
                <div class="card-body">
                    <form id="">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control" id="inname" placeholder="Enter Name">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="name" class="form-control" id="inemail" placeholder="Enter Email">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="inphone">Phone</label>
                                    <input type="tel" class="form-control" id="inphone" placeholder="Enter Phone">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="innid">NID</label>
                                    <input type="number" class="form-control" id="innid" placeholder="Enter NID">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="salary">Salary</label>
                                    <input type="number" class="form-control" id="insalary" placeholder="Enter Salary">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="joning_date">Joining Date</label>
                                    <input type="date" class="form-control" id="indate">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="photo">Photo</label>
                                    <input type="file" class="form-control" id="inphoto">
                                </div>
                                <img src="form.photo" alt="emp" style="height:40px; width:40px;">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
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
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }, errors: {

            }
        }
    },

    methods: {
        register() {
            // axios.post('/api/register', this.form)
            //     .then(res => {
            //         User.responseAfterLogin(res)
            //         User.ReposnseError(res.data.message, res.data.status)
            //         this.$router.push({ name: 'home' })
            //         console.log(res);
            //     }).catch(
            //         error => this.errors = error.response.data.errors
            //     )
        }
    }
}
</script>
