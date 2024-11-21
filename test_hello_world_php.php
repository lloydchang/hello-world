<?php
require_once 'hello_world_php.php';

class TestHelloWorldPhp extends PHPUnit\Framework\TestCase {
    public function testHelloWorld() {
        $this->assertEquals("Hello, World!", helloWorld());
    }
}
?>
