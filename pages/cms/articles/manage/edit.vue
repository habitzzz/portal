<template>
    <NuxtLayout name="cms">
      <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <!-- Breadcrumb Start -->
        <div
          class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <h2 class="text-2xl font-bold text-black dark:text-white">Artikel</h2>
  
          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <NuxtLink class="font-medium" to="/">Dashboard /</NuxtLink>
              </li>
              <li>
                <NuxtLink class="font-medium" to="/cms/articles/manage"
                  >Artikel /</NuxtLink
                >
              </li>
              <li class="font-medium text-primary">Ubah</li>
            </ol>
          </nav>
        </div>
        <!-- Breadcrumb End -->
  
        <!-- ====== Table Section Start -->
        <div class="flex flex-col gap-10">
          <!-- ====== Table Three Start -->
          <div
            class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
          >
            <div class="max-w-full overflow-x-auto">
              <div class="flex justify-between">
                <h2 class="font-bold text-xl">Ubah Artikel</h2>                
              </div>
              <form action="#">
                <div class="p-6.5">
                  <div class="mb-4.5">
                    <label class="mb-2.5 block text-black dark:text-white">
                      Judul
                    </label>
                    <input
                      type="text"
                      placeholder="Select subject"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
  
                  <div class="mb-6">
                    <label class="mb-2.5 block text-black dark:text-white">
                      Artikel
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Type your message"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>
  
                  <div class="mb-4.5">
                    <label class="mb-2.5 block text-black dark:text-white">
                      Kategori
                    </label>
                    <div class="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="">Type your subject</option>
                        <option value="">USA</option>
                        <option value="">UK</option>
                        <option value="">Canada</option>
                      </select>
                      <span
                        class="absolute top-1/2 right-4 z-30 -translate-y-1/2"
                      >
                        <svg
                          class="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
  
                  <button
                    class="flex w-full justify-center rounded bg-primary p-3 font-medium text-white"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          <!-- ====== Table Three End -->
        </div>
        <!-- ====== Table Section End -->
      </div>
    </NuxtLayout>
  </template>
      
      <script setup>
  definePageMeta({
    middleware: "auth",
  });
  </script>