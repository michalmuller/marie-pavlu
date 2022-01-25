<template>
  <div class="flex w-full bg-light-blue py-5 text-footer-color-text text-sm">
    <div class="container flex justify-between">
      <p>All rights reserved &copy; {{ year }}</p>
      <a class="company-link-a" target="_blank" href="https://bananappeal.com/">
        web vytvořil:
        <span class="company-link">
          <svg
            style="margin-top: -4px; margin-right:2px"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2.50195" y="4.50002" width="3" height="3" fill="#0D0C0B" />
            <rect x="2.50195" y="9.00002" width="3" height="3" fill="#0D0C0B" />
            <rect x="2.50195" y="13.5" width="3" height="3" fill="#0D0C0B" />
            <rect x="6.99805" y="4.50002" width="3" height="3" fill="#0D0C0B" />
            <rect x="2.50195" width="3" height="3" fill="#0D0C0B" />
            <rect x="6.99805" y="13.5" width="3" height="3" fill="#0D0C0B" />
            <rect x="11.502" y="4.50002" width="3" height="3" fill="#0D0C0B" />
            <rect x="11.502" y="9.00002" width="3" height="3" fill="#0D0C0B" />
            <rect x="11.502" y="13.5" width="3" height="3" fill="#0D0C0B" />
          </svg>
          bananappeal</span
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      let dt = new Date();
      return dt.getFullYear();
    },
  },
};
</script>

<style>
.company-link-a {
  display: flex;
  color: black;
}
.company-link {
  display: flex;
  align-items: flex-start;
  margin-left: 8px;
  color: black;
  font-weight: 700;
}
</style>
