<template>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Employees</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">Employees</li>
            <li class="breadcrumb-item active" aria-current="page">Edit Employees</li>
        </ol>
    </div>

    <div class="row pb-3">
        <div class="col-lg-3">
            <router-link to="/all-emp" class="btn btn-primary">All Employee</router-link>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Create Employees</h6>
                </div>
                <div class="card-body">


                    <form id="users" @submit.prevent="employeUpdate" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" v-model="form.name" class="form-control" id="inname"
                                        placeholder="Enter Name">
                                    <input type="text" hidden v-model="form.id" class="form-control" id="id">
                                    <small class="text-danger" v-if="errors.name">{{ errors.name[0]
                                    }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="name" v-model="form.email" class="form-control" id="inemail"
                                        placeholder="Enter Email">
                                    <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="inphone">Phone</label>
                                    <input type="tel" v-model="form.phone" class="form-control" id="inphone"
                                        placeholder="Enter Phone">
                                    <small class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="inaddress">Address</label>
                                    <input type="text" v-model="form.address" class="form-control" id="inaddress"
                                        placeholder="Enter Address">
                                    <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="innid">NID</label>
                                    <input type="number" v-model="form.nid" class="form-control" id="innid"
                                        placeholder="Enter NID">
                                    <small class="text-danger" v-if="errors.nid">{{ errors.nid[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="salary">Salary</label>
                                    <input type="number" v-model="form.sallary" class="form-control" id="insalary"
                                        placeholder="Enter Salary">
                                    <small class="text-danger" v-if="errors.sallary">{{ errors.salary[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="joning_date">Joining Date</label>
                                    <input type="date" v-model="form.date" class="form-control" id="indate">
                                    <small class="text-danger" v-if="errors.date">{{ errors.date[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="photo">Photo</label>
                                    <input type="file" class="form-control" @change="onImageChange">
                                    <small class="text-danger" v-if="errors.photo">{{ errors.photo[0] }}</small>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <img style="vertical-align: middle; max-width: 52px; border: 1px solid black;"
                                        :src="form.photoview" sizes="height:40px; width:40px;">
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Updated</button>
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

        let id = this.$route.params.id
        axios.get('/api/employee/' + id)
            .then(
                (data) => (this.form = data.data)
            )
            .catch(
                console.log('error')
            )
    },
    data() {
        return {
            form: {
                id: null,
                name: null,
                email: null,
                phone: null,
                sallary: null,
                address: null,
                photo: null,
                photoview: null,
                newphoto: null,
                nid: null,
                date: null,
            }, errors: {

            }
        }
    },
    methods: {
        onImageChange(e) {
            this.form.photo = e.target.files[0];
            let file = e.target.files[0];
            if (file.size > 1048770) {
                User.NotyAlertss("error", "image is greater then 1MB");
            } else {
                let reader = new FileReader();
                reader.onload = event => {
                    this.form.photoview = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        employeUpdate() {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            let formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('email', this.form.email);
            formData.append('phone', this.form.phone);
            formData.append('salary', this.form.sallary);
            formData.append('address', this.form.address);
            formData.append('nid', this.form.nid);
            formData.append('id', this.form.id);
            formData.append('date', this.form.date);
            formData.append('photo', this.form.photo);

            axios.post('/api/employee', formData, config)
                .then(() => {
                    this.$router.push({ name: 'AllEmp' })
                    User.NotyAlertss('success', 'Updated Successfully');
                }).catch(
                    error => this.errors = error.response.data.errors
                )
        },
    }

}
</script>
