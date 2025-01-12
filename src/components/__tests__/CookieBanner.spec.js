import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useRouter } from 'vue-router'
import { mount } from '@vue/test-utils'
import CookieBanner from '@/components/CookieBanner.vue'

// Mock the router to intercept redirects
vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}))

describe('CookieBanner Component', () => {
  let wrapper
  const pushMock = vi.fn()

  beforeEach(() => {
    // Configure the router mock
    useRouter.mockReturnValue({ push: pushMock })

    // Clear localStorage before each test
    localStorage.clear()
    wrapper = mount(CookieBanner)
  })

  it('displays the cookie banner when no preferences are saved', () => {
    expect(wrapper.find('.cookie-banner').exists()).toBe(true)
  })

  it('hides the banner when the user accepts cookies', async () => {
    await wrapper.find('button').trigger('click')
    expect(localStorage.getItem('cookiePreferences')).toBe('true')
    expect(wrapper.vm.cookiePreferences).toBe(true)
    expect(wrapper.find('.cookie-banner').exists()).toBe(false)
  })

  it('hides the banner when the user continues without accepting cookies', async () => {
    await wrapper.findAll('button')[1].trigger('click')
    expect(localStorage.getItem('cookiePreferences')).toBe('false')
    expect(wrapper.vm.cookiePreferences).toBe(true)
    expect(wrapper.find('.cookie-banner').exists()).toBe(false)
  })

  it('redirects to the customization page when "Personnaliser mon choix" is clicked', async () => {
    await wrapper.findAll('button')[2].trigger('click')
    expect(pushMock).toHaveBeenCalledWith('/customize-cookies')
    expect(wrapper.vm.cookiePreferences).toBe(true)
    expect(wrapper.find('.cookie-banner').exists()).toBe(false)
  })
})
