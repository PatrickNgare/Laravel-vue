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
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
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
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >

              <Spinner v-if="loading"  class="absolute left-0 top-0 bg-white right-0 bottom-0 flex items-center justify-center z-50" />
              <header class="py-3 px-4 flex justify-between items-center" >

                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                    
                   {{  product.id   ? `Updare product: "${props.product.title}"` : 'Create new product' }}
                </DialogTitle>

              </header>
              <form @submit.prevent="onSubmit">
                <div class=" bg-white px-4 pt-5 pb-4 ">

                </div>
                <footer class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex-row-reverse">
                  

                </footer>

              </form>
            
            </DialogPanel>
            </TransitionChild>
          </div>class="absolute left-0 top-0 bg-white right-0 bottom-0 flex items-center justify-center z-50"
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

  <script setup>
  import { computed, onUpdated, ref } from 'vue'
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

const product=ref({
 id: props.product.id,
 title: props.product.title,
 image: props.product.image,
 description: props.product.description,
 price:props.product.price,
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
        price:props.product.price,
    }
  })

  function closeModal() {
    show.value = false
    emit('close')
  }

  </script>


<style scoped>

</style>

