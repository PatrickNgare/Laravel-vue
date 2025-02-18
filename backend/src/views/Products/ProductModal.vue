<template>

    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >

              <Spinner v-if="loading"  class="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-white" />
              <header class="flex items-center justify-between px-4 py-3" >

                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">

                   {{  product.id   ? `Update product: "${props.product.title}"` : 'Create new product' }}
                </DialogTitle>

                <button @click="closeModal()"
                class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0,2)]" >


                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>



              </header>
              <form @submit.prevent="onSubmit">
                <div class="col-span-2 px-4 pt-5 pb-4 bg-white ">
                  <CustomInput class="mb-2" v-model="product.title" label="Product Title" />
                  <CustomInput type="file" class="mb-2"  label="Product Image" @change="file => product.image = file"/>
                  <CustomInput type="textarea" class="mb-2" v-model="product.description" label="Description" />
                  <CustomInput type="number" class="mb-2" v-model="product.price" label="Price" prepend="$"/>
                 

                </div>
                <footer class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex-row-reverse">
                  <button type="submit" class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-indigo-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm hover:bg-indigo-700 focus:ring-indigo-500">
                    Submit
                  </button>
                  <button type="button" @click="closeModal()" ref="cancelButtonRef"
                  class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-indigo-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm hover:bg-indigo-700 focus:ring-indigo-500">

                    Cancel
                    </button>

                </footer>

              </form>

            </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

  <script setup>
  import { computed, onUpdated, ref } from 'vue'
  //import store from '@/store/'
  import store from "../../store/index.js"
  import Spinner from "@/components/core/Spinner.vue";
  import CustomInput from '@/components/core/CustomInput.vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'




  const loading= ref(false)

  const emit = defineEmits(['update:modelValue'])

  const props=defineProps({
    modelValue:Boolean,
    product:{
        required:true,
        type:Object,
    }

  })

const product= ref ({
 id: props.product.id,
 title: props.product.title,
 image: props.product.image,
 description: props.product.description,
 price:props.product.price || 0,
})


  const show=computed({
    get:()=>props.modelValue,
    set:(value)=>emit('update:modelValue',value)
  })




  onUpdated(()=>{
    product.value={
        id: props.product.id,
        title: props.product.title,
        image: props.product.image,
        description: props.product.description,
        price:props.product.price?? 0,
    }
  })

  function closeModal() {
    show.value = false
    emit('close')
  }

  function onSubmit(){
    loading.value=true
   if(product.value.id){

    store.dispatch('updateProduct',product.value)
      .then(Response=>{
        loading.value=false
        if(Response.status===200){
          store.dispatch('getProducts')
          closeModal()
        }
      })


   }else{
    store.dispatch('createProduct',product.value)
    .then(response=>{
      loading.value=false;
      if(response.status===201){
        store.dispatch('getProducts')
        closeModal()
      }
    })
   }

  }



  </script>


<style scoped>

</style>

