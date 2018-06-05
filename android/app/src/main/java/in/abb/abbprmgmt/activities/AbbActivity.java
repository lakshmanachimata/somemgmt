package in.abb.abbprmgmt.activities;

import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.ImageView;
import android.widget.TextView;


/**
 * Created by lakshmana on 10/11/17.
 */

public class AbbActivity extends AppCompatActivity {

    boolean active = false;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
    @Override
    public void onResume() {
        active = true;
        super.onResume();
    }
    @Override
    public void onPause() {
        active = false;
        super.onPause();
    }
    @Override
    protected void onStart() {
        // call the superclass method first
        super.onStart();
    }
    @Override
    protected void onStop() {
        // call the superclass method first
        super.onStop();
    }
    @Override
    public void onDestroy() {
        super.onDestroy();
    }
    void hideKeyBoard(){
        View view = findViewById(android.R.id.content).getRootView();
        if (view != null) {
            InputMethodManager imm = (InputMethodManager)getSystemService(getApplicationContext().INPUT_METHOD_SERVICE);
            imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
        }
    }
}
