<template>
    <div>
      <label class="sr-only">{{ label }}</label>
      <div class="flex mt-1 rounded-md" :class="type === 'checkbox' ? 'items-center' : 'shadow-sm'">
        <span v-if="prepend" class="px-3 py-2 text-gray-500 border border-gray-300 bg-gray-50 rounded-l-md">
          {{ prepend }}
        </span>

        <template v-if="type === 'textarea'">
          <textarea
            :name="name"
            :required="required"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :class="inputClasses"
            :placeholder="label">
          </textarea>
        </template>

        <template v-else-if="type === 'file'">
          <input
            type="file"
            :name="name"
            :required="required"
            @input="emit('change', $event.target.files[0])"
            :class="inputClasses"
            :placeholder="label"/>
        </template>

        <template v-else>
          <input
            :type="type"
            :name="name"
            :required="required"
            :value="modelValue"
            @input="handleInput($event)"
            :class="inputClasses"
            :placeholder="label"
            step="0.01"/>
        </template>

        <span v-if="append" class="inline-flex items-center px-3 text-sm text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
          {{ append }}
        </span>
      </div>
    </div>
  </template>

  <script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: [String, Number, File],
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    required: Boolean,
    prepend: {
      type: String,
      default: ''
    },
    append: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['update:modelValue', 'change']);

  const inputClasses = computed(() => {
    const cls = [
      `block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`
    ];

    const hasPrepend = props.prepend !== '';
    const hasAppend = props.append !== '';

    if (hasAppend && !hasPrepend) {
      cls.push('rounded-l-md');
    } else if (hasPrepend && !hasAppend) {
      cls.push('rounded-r-md');
    } else if (!hasPrepend && !hasAppend) {
      cls.push('rounded-md');
    }

    return cls.join(' ');
  });

  const handleInput = (event) => {
    let value = event.target.value;
    if (props.type === 'number') {
      value = value === '' ? null : parseFloat(value);
    }
    emit('update:modelValue', value);
  };
  </script>

  <style scoped>
  </style>
