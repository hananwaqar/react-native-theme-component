package cl.json.social;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import java.io.File;
import android.os.Environment;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;

/**
 * Created by Muhzi4u on 14-01-19.
 */
public class SnapChatShare extends SingleShareIntent {

    private static final String PACKAGE = "com.snapchat.android";
    private static final String CLASS = "com.snap.mushroom.MainActivity";
    private static final String PLAY_STORE_LINK = "market://details?id=com.snapchat.android";
    
    public SnapChatShare(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public void open(ReadableMap options) throws ActivityNotFoundException {
        super.open(options);
        //  extra params here
        this.openIntentChooser();
    }

    @Override
    protected String getPackage() {
        return PACKAGE;
    }

    @Override
    protected String getComponentClass() { return CLASS; }

    @Override
    protected String getDefaultWebLink() {
        return null;
    }

    @Override
    protected String getPlayStoreLink() {
        return PLAY_STORE_LINK;
    }
}
