<template>
    <div>
        <Card class="p-shadow-1">
            <template #header> </template>
            <template #title>
                Location List
            </template>
            <template #content>
                <div class="p-grid">
                    <div class="p-col-4">4</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                    <div class="p-col">1</div>
                </div>

                <div class="p-grid">
                    <div class="p-col-2">2</div>
                    <div class="p-col-6">6</div>
                    <div class="p-col-4">4</div>
                </div>
            </template>
            <template #footer>
                <div class="p-grid ">
                    <div class="p-col-3">
                        <Button icon="pi pi-share-alt" label="Merge Locations" />
                    </div>
                    <div class="p-col-3  p-offset-6">
                        <Button icon="pi pi-plus" label="Add Location" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    export default {
        name: "LocationPanel",
        props: {},
        data(){
            return {
                selectedCity:null,
                filteredCities:null,
                filteredMunicipalities:[],
                selectedMunicipality:null
            }
        },
        created(){
            
        },
        components:{
            
        },
        methods:{
            
        }
    }
</script>


<style scoped>
.box {
   
}
</style>
