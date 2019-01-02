<template>
    <div class="page">
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="large-12 medium-12 small-12 cell">
                        <label>Name
                            <input type="text" placeholder="Cafe name">
                        </label>
                    </div>
                    <div class="large-12 medium-12 small-12 cell">
                        <label>Address
                            <input type="text" placeholder="Address">
                        </label>
                    </div>
                    <div class="large-12 medium-12 small-12 cell">
                        <label>City
                            <input type="text" placeholder="City">
                        </label>
                    </div>
                    <div class="large-12 medium-12 small-12 cell">
                        <label>State
                            <input type="text" placeholder="State">
                        </label>
                    </div>
                    <div class="large-12 medium-12 small-12 cell">
                        <label>Zip
                            <input type="text" placeholder="Zip">
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        }
    }
</script>

<style scoped>

</style>
