import { mount } from '@vue/test-utils';
import { describe,beforeEach, it, expect, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import RegisterForm from '@/components/RegisterForm.vue';
import { useUserStore } from '@/stores/UserStore.js'


vi.mock('../stores/UserStore.js', () => ({
  useUserStore: vi.fn().mockReturnValue({
    register: vi.fn().mockResolvedValue(true),
  }),
}));

describe('RegisterForm Component', () => {
  // Setting up Pinia before each test
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);  // Set Pinia as active
  });

  /**
   * Unit test to ensure that the 'register' method is called with the correct parameters
   * when the registration form is submitted.
   *
   */
  it('should call register method when form is submitted', async () => {
    // Mount the component
    const wrapper = mount(RegisterForm);

    // Spy on the 'register' method from the store
    const userStore = useUserStore();
    const registerSpy = vi.fn();  // Create a mock of the 'register' method
    userStore.register = registerSpy; // Replace the real 'register' method with the mock

    // Fill the reactive data directly in wrapper.vm
    wrapper.vm.name= 'John';
    wrapper.vm.lastName = 'Doe';
    wrapper.vm.email = 'john.doe@example.com';
    wrapper.vm.password = 'password123';
    wrapper.vm.confirmPassword = 'password123';
    wrapper.vm.isArtisan = true;

    // Force Vue to react to the changes
    await wrapper.vm.$nextTick();


    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Check that the register function was called with the correct parameters
    expect(registerSpy).toHaveBeenCalledWith(
      'John',
      'Doe',
      'john.doe@example.com', // email
      'password123', // password
      'artisan' // role (isArtisan)
    );
  });
  it('should display success message after registration', async () => {
    // Mount the component
    const wrapper = mount(RegisterForm);

    // Spy on the 'register' method from the store
    const userStore = useUserStore();
    const registerSpy = vi.fn();
    userStore.register = registerSpy;

    // Fill the reactive data directly in wrapper.vm
    wrapper.vm.name= 'Jane';
    wrapper.vm.lastname = 'Doe';
    wrapper.vm.email = 'jane.doe@example.com';
    wrapper.vm.password = 'password123';
    wrapper.vm.confirmPassword = 'password123';
    wrapper.vm.isArtisan = false;

    // Force Vue to react to the changes
    await wrapper.vm.$nextTick();

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Check that the success message is displayed
    await wrapper.vm.$nextTick(); // Ensure the DOM is updated
    expect(wrapper.text()).toContain('Compte créé avec succès ! Redirection vers la page de connexion ...');
  });
  it('should show an error message when passwords do not match', async () => {
    const wrapper = mount(RegisterForm);

    wrapper.vm.name = 'John';
    wrapper.vm.lastName = 'Doe';
    wrapper.vm.email = 'john.doe@example.com';
    wrapper.vm.password = 'password123';
    wrapper.vm.confirmPassword = 'password124';
    wrapper.vm.isArtisan = false;

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.errorMessage).toBe('Les mots de passe ne correspondent pas.');
  });

});

