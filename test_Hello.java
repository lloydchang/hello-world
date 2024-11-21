import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestHelloWorldJava {
    @Test
    void testHelloWorld() {
        assertEquals("Hello, World!", HelloWorldJava.helloWorld());
    }
}
