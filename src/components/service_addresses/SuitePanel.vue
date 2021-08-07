<template>
    <div>
        <Card class="p-shadow-1">
            <template #header> 
               Suites List
            </template>
            <template #title>
                <TabView>
                    <TabPanel v-for="subLayer in suiteSubLayers" :key="subLayer.id" :header="subLayer.name">
                        <Panel :toggleable="true">
                            <template #header>
                                {{ subLayer.name}}
                            </template>
                            Content for 
                        </Panel>
                    </TabPanel>
                </TabView>
            
            </template>
            <template #content>
                
            </template>
            <template #footer>
               <!--<div class="p-grid ">
                    <div class="p-col-3">
                        <Button icon="pi pi-share-alt" label="Merge Locations" />
                    </div>
                    <div class="p-col-3  p-offset-6">
                        <Button icon="pi pi-plus" label="Add Location" />
                    </div>
                </div>-->
            </template>
        </Card>
    </div>
</template>

<script>
    import TabView from 'primevue/tabview';
    import TabPanel from 'primevue/tabpanel';
    import Panel from 'primevue/panel';


    export default {
        name: "SuitesPanel",
        props: {},
        data(){
            return {
               suiteSubLayers:[
                   {
                    name:"Orphan Suites",
                    id:"orphan-suites",
                    icon:"",
                    data:[]
                   },
                    {
                    name:"Undefined Suites",
                    id:"undefined-suites",
                    icon:"",
                    data:[]
                   },
                   {
                    name:"Child Suites",
                    id:"child-suites",
                    icon:"",
                    data:[]
                   },
                   {
                    name:"Merge List Suites",
                    id:"merge-list-suites",
                    icon:"",
                    data:[]
                   },
                   {
                    name:"Map Overview",
                    id:"undefined-suites",
                    icon:"",
                    data:[]
                   }
               ]
            }
        },
        created(){
            
        },
        components:{
            TabView,
            TabPanel,
            Panel
        },
        methods:{
            
        }
    }
</script>


<style scoped>
.box {
   
}
</style>
