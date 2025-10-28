using System.Collections;
using UnityEngine;

namespace ClassLibrary1
{
    public class BeatSaberTest : MonoBehaviour
    {
        void Update()
        {
            
        }

        public void Test()
        {
            //var output = Oculus.Platform.Application.GetVersion();
            //output.OnComplete(callback);
        }

        //private void callback(Message<ApplicationVersion> message)
        //{
        //    Debug.Log("callback");
        //    var scene = SceneManager.GetActiveScene();
        //}
    }

    public class MainClass
    {
        public void Main()
        {
            Debug.Log("Main Class");
            GUI.Label(new Rect(10, 10, 100, 20), new GUIContent("hehehe"), GUIStyle.none);
		}
    }
}
