---
layout: false
---

```svelte
{#if isUserLoggedIn}
  <WelcomeBanner />
{:else}
  <LoginForm />
{/if}
```