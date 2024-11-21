#include "gtest/gtest.h"
#include "hello_world_cpp.h"

TEST(HelloWorldCppTest, HelloWorld) {
  ASSERT_EQ(helloWorld(), "Hello, World!");
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
