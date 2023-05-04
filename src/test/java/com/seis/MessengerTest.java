package com.seis;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MessengerTest {

    @Test
    public void testHome() {
        Messenger messenger = new Messenger();
        String result = messenger.home();
        assertEquals("home.html", result);
    }

    @Test
    public void testAbout() {
        Messenger messenger = new Messenger();
        String result = messenger.about();
        assertEquals("about.html", result);
    }

    @Test
    public void testRecommend() {
        Messenger messenger = new Messenger();
        String result = messenger.recommend();
        assertEquals("recommend.html", result);
    }

}
