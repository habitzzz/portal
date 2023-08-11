<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <CmsSidebar />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <!-- ===== Header Start ===== -->
      <CmsHeader />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main class="bg-slate-100">
        <slot />
      </main>
    </div>
  </div>
</template>