<template>
  <aside
    :class="navbar.getToggleNav ? 'translate-x-0' : '-translate-x-full'"
    class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-dark text-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    @click="navbar.setToggleNav(false)"
  >
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NuxtLink to="/cms">
        <nuxt-img src="/img/habitzkid-white.png" alt="Logo" class="w-48" />
      </NuxtLink>

      <button
        class="block lg:hidden"
        @click="navbar.setToggleNav(!navbar.getToggleNav)"
      >
        <svg
          class="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>
    </div>
    <!-- SIDEBAR HEADER -->

    <div
      class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"
    >
      <!-- Sidebar Menu -->
      <nav
        class="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
        x-data="{selected: $persist('Dashboard')}"
      >
        <!-- Menu Group -->
        <div>
          <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

          <ul class="mb-6 flex flex-col gap-1.5">
            <!-- Menu Item Dashboard -->
            <li v-for="row in menu.adminMenu" :key="row.id">
              <NuxtLink
                class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                :to=" row.submenu ? '#' : row.url"
                @click.prevent="
                  selected = selected === row.name ? '' : row.name
                "
                :class="{
                  'bg-graydark dark:bg-meta-4':
                    selected === row.name
                }"
              >
                <i :class="'i-' + row.icon " class="w-5 h-5" ></i>

                {{ row.name }}

                <svg
                  v-if=" row.submenu"
                  class="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  :class="{ 'rotate-180': selected === row.name }"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  />
                </svg>
              </NuxtLink>

              <!-- Dropdown Menu Start -->
              <div
                v-if="row.submenu"
                class="overflow-hidden"
                :class="selected === row.name ? 'block' : 'hidden'"
              >
                <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                  <li v-for="sub in row.submenu" :key="sub.id">
                    <NuxtLink
                      class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                      :to="sub.url"
                      :class="page === row.submenu && '!text-white'"
                      >{{ sub.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <!-- Dropdown Menu End -->
            </li>
            <!-- Menu Item Dashboard -->
          </ul>

        </div>
      </nav>
      <!-- Sidebar Menu -->
    </div>
    <!-- solve bug icon -->
   
  </aside>  
</template>


<script setup>
const page = ref("");
const selected = ref("");
const navbar = useNavbar();
const menu = ref({
  adminMenu: [
    {
      id: 1,
      name: "Dashboard",
      url: "/cms",
      icon: "solar:home-2-linear",
    },
    {
      id: 2,
      name: "Artikel",
      url: "/cms/articles",
      icon: "solar:inbox-archive-linear",
      submenu: [
        {
          id: 3,
          name: "Semua Artikel",
          url: "/cms/articles",
        },
        {
          id: 4,
          name: "Tambah Artikel",
          url: "/cms/articles/add",
        },
        {
          id: 5,
          name: "Kategori Artikel",
          url: "/cms/articles/categories",
        },
      ],
    },
    {
      id: 6,
      name: "Komentar",
      url: "/cms/comments",
      icon: "solar:dialog-2-linear",
    },
    {
      id: 7,
      name: "Pengguna",
      url: "/cms/users",
      icon: "solar:users-group-two-rounded-linear",
      submenu: [
        {
          id: 8,
          name: "Semua Pengguna",
          url: "/cms/users/manage",
        },
        {
          id: 9,
          name: "Tambah Pengguna",
          url: "/cms/users/add",
        },
        {
          id: 10,
          name: "Profil Pengguna",
          url: "/cms/users/profile",
        },
      ],
    },
    {
      id: 11,
      name: "Media Library",
      url: "/cms/media",
      icon: "solar:album-linear",
    },
    {
      id: 12,
      name: "Pengaturan",
      url: "/cms/settings",
      icon: "solar:settings-linear",
    },
    {
      id: 13,
      name: "Newsletter",
      url: "/cms/newsletter",
      icon: "solar:mailbox-linear",
      submenu: [
        {
          id: 14,
          name: "Subscriber",
          url: "/cms/newsletter/subscriber",
        },
        {
          id: 15,
          name: "Campaign",
          url: "/cms/newsletter/campaign",
        },
      ],
    },
    {
      id: 16,
      name: "Toko",
      url: "/admin/store",
      icon: "solar:shop-linear",
      submenu: [
        {
          id: 17,
          name: "Boardgame",
          url: "/cms/store/boardgame",
        },
        {
          id: 18,
          name: "Marketplace",
          url: "/cms/store/marketplace",
        },
      ],
    },
    {
      id: 19,
      name: "Kelas",
      url: "/cms/class",
      icon: "solar:archive-linear",
      submenu: [
        {
          id: 20,
          name: "Kelas Parenting",
          url: "/cms/class/boardgame",
        },
        {
          id: 21,
          name: "Video",
          url: "/cms/class/marketplace",
        },
        {
          id: 22,
          name: "Podcast",
          url: "/cms/class/marketplace",
        },
        {
          id: 23,
          name: "Konsultasi",
          url: "/cms/class/marketplace",
        },
      ],
    },
    {
      id: 13,
      name: "Transaksi",
      url: "/cms/transcation",
      icon: "solar:user-linear",
      submenu: [
        {
          id: 20,
          name: "Boardgame",
          url: "/cms/transcation/boardgame",
        },
        {
          id: 21,
          name: "Marketplace",
          url: "/cms/transcation/marketplace",
        },
        {
          id: 22,
          name: "Kelas Parenting",
          url: "/cms/transcation/class",
        },
      ],
    },
  ],
});
</script>