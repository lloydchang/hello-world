#include <stdio.h>
#include <assert.h>
#include "hello_world_c.h"

int main() {
    assert(strcmp(helloWorld(), "Hello, World!") == 0);
    printf("All tests passed!\n");
    return 0;
}
