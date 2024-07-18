import { defineStore } from 'pinia'

export const useAddressStore = defineStore({
  id: 'address',
  state: () => ({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: '',
  }),
  actions: {
    setAddress(address) {
      this.address = address;
    },
    setCity(city) {
      this.city = city;
    },
    setPostalCode(postalCode) {
      this.postalCode = postalCode;
    },
    setCountry(country) {
      this.country = country;
    },
    setPhone(phone) {
      this.phone = phone;
    },
  },
});