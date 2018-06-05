package in.abb.abbprmgmt.activities;

import android.os.Bundle;
import android.support.v7.widget.RecyclerView;

import in.abb.abbprmgmt.R;

/**
 * Created by lakshmana on 13/03/18.
 */

public class MainActivity extends AbbActivity {
    RecyclerView mainList;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mainList = findViewById(R.id.mainlist);
    }
    @Override
    public void onResume() {
        super.onResume();
    }
    @Override
    public void onPause() {
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
}
