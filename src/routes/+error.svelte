<script lang="ts">
    import { page } from '$app/state';
</script>

<h1 class="text-white w-full min-h-screen flex items-center justify-center">{page.error?.message}</h1>