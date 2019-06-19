<template>
  <div class="container" id="api-metrics">
    <router-view/>
  </div>
</template>

<style lang="scss">
body.api-metrics {
  .container.content-page {
    width: 100% !important;
  }
}

#api-metrics {
  @import '~datatables.net-bs4/css/dataTables.bootstrap4';

  width: 100% !important;

  h1 {
    text-align: center;
  }

  tr.odd,
  tr.odd td,
  thead th,
  thead td {
    text-align: left;
  }

  .custom-select {
    display:inline-block;
    width:100%;
    height:calc(1.5em + .75em + 2px);
    padding:.375em 1.75em .375em .75em;
    font-size:1em;
    font-weight:400;
    line-height:1.5;
    color:#495057;
    vertical-align:middle;
    background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75em center/8px 10px;
    background-color:#fff;
    border:1px solid #ced4da;
    border-radius:.25em;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none
  }
  .custom-select:focus {
    border-color:#80bdff;
    outline:0;
    -webkit-box-shadow:0 0 0 .2em rgba(0,123,255,.25);
    box-shadow:0 0 0 .2em rgba(0,123,255,.25)
  }
  .custom-select:focus::-ms-value {
    color:#495057;
    background-color:#fff
  }
  .custom-select[multiple],
  .custom-select[size]:not([size="1"]) {
    height:auto;
    padding-right:.75em;
    background-image:none
  }
  .custom-select:disabled {
    color:#6c757d;
    background-color:#e9ecef
  }
  .custom-select::-ms-expand {
    display:none
  }
  .custom-select-sm {
    height:calc(1.5em + .5em + 2px);
    padding-top:.25em;
    padding-bottom:.25em;
    padding-left:.5em;
    font-size:.875em
  }
  .custom-select-lg {
    height:calc(1.5em + 1em + 2px);
    padding-top:.5em;
    padding-bottom:.5em;
    padding-left:1em;
    font-size:1.25em
  }

  .custom-select-lg-container {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .metrics-footer {
    margin-top: 2em;
  }
}
</style>
