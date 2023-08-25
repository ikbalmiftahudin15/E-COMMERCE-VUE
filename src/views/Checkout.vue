<template>
    <br>
    <br>
    <br>
    <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" class="text-2xl font-bold text-gray-800">checkout</a>
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg></a>
          <span class="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span class="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span class="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="../assets/img/compass.jpeg" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">Compass Retrograde</span>
          <span class="float-right text-gray-400">40</span>
          <p class="text-lg font-bold">Rp.500.000</p>
        </div>
      </div>
      
    </div>

    <p class="mt-8 text-lg font-medium">Metode Pembayaran</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Gopay</span>
            
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>
      <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAADFBMVEX////tHCTsAAz2qKrp10ouAAAA20lEQVR4nO3QsRGAQAzAsAD770wf139QSBP4PBfbfB3wQ56UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVJzs83DNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzzAnoGZg5GBxcoAAAAAElFTkSuQmCC" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="State">State</option>
        </select>
        <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      <!-- Total -->
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">Rp.500.000</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">Rp.10.000</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">Rp.510.000</p>
      </div>
    </div>
    <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>

</template>