package main

import (
	"testing"
	"hello_world_go"
)

func TestHelloWorldGo(t *testing.T) {
	if hello_world_go.HelloWorld() != "Hello, World!" {
		t.Error("Expected 'Hello, World!', but got ", hello_world_go.HelloWorld())
	}
}
