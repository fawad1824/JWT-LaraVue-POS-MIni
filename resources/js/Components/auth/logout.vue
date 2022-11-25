<template>

</template>
<script>

export default {
    created() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        User.ReposnseError("Logout Successfully", "success")
        this.$router.push({ name: 'Login' })
    }
}
</script>
