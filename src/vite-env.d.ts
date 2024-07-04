/// <reference types="vite/client" />

// Explanation: https://www.totaltypescript.com/how-to-properly-type-window#solution-2-a-dts-file

interface Window {
    TEST_NAMESPACE: number | undefined;
}
