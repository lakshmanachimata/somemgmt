package in.abb.abbprmgmt.utilities;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Typeface;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.preference.PreferenceManager;
import android.util.Log;
import android.widget.Toast;


import org.json.JSONObject;

import java.util.HashMap;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import in.abb.abbprmgmt.model.GlobalModel;

/**
 * Created by lakshmana on 09/11/17.
 */

public class Utils {


    static Context mContext = null;
    static SharedPreferences preferences;
    static SharedPreferences.Editor prefEditor;
    static GlobalModel globalModel;
    static HashMap<String,Object> paramsMap = new HashMap<>();

    public static final String qot = "Quality Observation Tour";
    public static final String myfactory = "My Factory";
    public static Typeface regTypeFace;
    public static Typeface boldTypeFace;
    public static Typeface medTypeFace;
    public static Typeface lightTypeFace;

    public static void init(Context context){
        mContext = context;
        preferences = PreferenceManager.getDefaultSharedPreferences(mContext);
        prefEditor = preferences.edit();
        globalModel = new GlobalModel();
        regTypeFace = Typeface.createFromAsset(context.getAssets(),
                "fonts/ABBvoice_A_Rg.ttf");
        boldTypeFace = Typeface.createFromAsset(context.getAssets(),
                "fonts/ABBvoice_A_Bd.ttf");
        medTypeFace = Typeface.createFromAsset(context.getAssets(),
                "fonts/ABBvoice_A_Md.ttf");
        lightTypeFace = Typeface.createFromAsset(context.getAssets(),
                "fonts/ABBvoice_A_Lt.ttf");
    }
    public static boolean isNetworkAvailable(){
        ConnectivityManager cm = (ConnectivityManager) mContext.getSystemService(mContext.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        boolean  isConnected = activeNetwork!= null && activeNetwork.isConnectedOrConnecting();
        if(!isConnected){
            Toast.makeText(mContext,"Please check internet connection",Toast.LENGTH_SHORT).show();
        }
        return isConnected;
    }

    public static void addToMap(String key, Object value){
        paramsMap.put(key, value);
    }

    public static void clearMap(){
        paramsMap.clear();
    }


    public static GlobalModel getGlobalModel(){
        return  globalModel;
    }

    public static int readIntPref(String prefName){
        return preferences.getInt(prefName,0);
    }

    public static void writeBooleanPref(String prefName, Boolean value ){
        prefEditor.putBoolean(prefName,value).commit();
    }

    public static Boolean readBooleanPref(String prefName){
        return preferences.getBoolean(prefName,false);
    }
    public static void writeStringPref(String prefName, String value ){
        prefEditor.putString(prefName,value).commit();
    }

    public static String readStringPref(String prefName){
        return preferences.getString(prefName,"");
    }
    public static void writeStringSetPref(String prefName, Set<String> value ){
        prefEditor.putStringSet(prefName,value).commit();
    }

    public static Set<String> readStringSetPref(String prefName){
        return preferences.getStringSet(prefName,null);
    }


    public static void writeLongPref(String prefName, Long value ){
        prefEditor.putLong(prefName,value).commit();
    }

    public static Long readLongPref(String prefName){
        return preferences.getLong(prefName,0L);
    }

    public static void writeFloatPref(String prefName, Float value ){
        prefEditor.putFloat(prefName,value).commit();
    }

    public static Float readFloatPref(String prefName){
        return preferences.getFloat(prefName,0.0f);
    }

    public static void logme(String data){
        Log.d("prmgmt_android",data);
    }

    public static boolean isEmailValid(String email) {
        String expression = "^[\\w\\.-]+@([\\w\\-]+\\.)+[A-Z]{2,4}$";
        Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
