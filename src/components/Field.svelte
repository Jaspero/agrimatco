<script>
    export let label;
</script>

<style>
    .field {
        display: flex;
        flex-direction: column;
        width: max-content;
        background: white;
        border: 1px solid var(--border);
        padding: var(--space-small) var(--space-regular);
        margin: var(--space-regular) 0;
    }
    @supports (max-width: fit-content) {
        .field { max-width: fit-content; }
    }
    @supports (max-width: -moz-available) {
        .field { max-width: -moz-available; }
    }
    .field:focus-within {
        outline: 2px solid var(--accent);
    }
    .field-label {
        display: block;
        font-family: inherit;
        font-size: var(--font-small);
    }
    .field > :global(input),
    .field > :global(textarea) {
        line-height: inherit;
        font-size: inherit;
        font-family: inherit;
        box-shadow: none;
        background: none;
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }
    .field > :global(textarea) {
        resize: vertical;
    }
</style>

<label class="field">
    <span class="field-label">{label}</span>
    <slot></slot>
</label>
