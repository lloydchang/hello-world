require 'test/unit'
require_relative 'hello_world_ruby'

class TestHelloWorldRuby < Test::Unit::TestCase
  def test_hello_world
    assert_equal("Hello, World!", hello_world)
  end
end
