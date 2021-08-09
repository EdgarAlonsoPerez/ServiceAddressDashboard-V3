<template>
    <div>
        <Card class="p-shadow-1">
            <template #header> </template>
            <template #title>
                Location List
            </template>
            <template #content>
                <div>
                    <DataTable
                        :value="serviceAddresses" 
                        v-model:selection="selectedLocation" 
                        selectionMode="single" 
                        dataKey="id" 
                        @rowSelect="onRowSelect" 
                        @rowUnselect="onRowUnselect" 
                        responsiveLayout="scroll" 
                    >
                        <Column field="id" header="Internal Id"></Column>
                        <Column field="fullAddress" header="Address"></Column>
                        <Column field="parentAddress" header="Parent"></Column>
                    </DataTable>
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
    import serviceAddressesService  from '../../services/ServiceAddressesService.js'
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    // import ColumnGroup from 'primevue/columngroup'; 

    export default {
        name: "LocationPanel",
        props: {
            city : Object,
            municipality: Object
        },
        data(){
            return {
                serviceAddresses:[],
                serviceAddressesService:null,
                selectedLocation:null
            }
        },
        watch:{
           async city(){
                this.serviceAddresses = await this.serviceAddressesService.getServiceAddresses({cityId:this.city.id})
                console.log(this.serviceAddresses)
            }
        },
        created(){
            this.serviceAddressesService = new serviceAddressesService()
        },
        components:{
            DataTable,
            Column
        },
        methods:{
            onRowSelect(event) {
                console.log(event.data);
            },
            onRowUnselect(event) {
                 console.log(event.data);
            }
        }
    }
</script>


<style scoped>
.box {
   
}
</style>
