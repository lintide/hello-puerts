using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class Hello : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Puerts.JsEnv env = new Puerts.JsEnv();
        env.Eval(@"
            console.log('hello puerts');
        ");
    }

    // Update is called once per frame
    void Update()
    {
        // Puerts.JsEnv env = new Puerts.JsEnv();
        
    }
}
