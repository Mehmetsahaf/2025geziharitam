using System;
using System.Collections.Generic;

namespace kültürüm.Models
{
    public class ZiyaretVerisi
    {
        public string Tarih { get; set; } = "";
        public List<string> MeshurYemekler { get; set; } = new();
        public string Yemekler { get; set; } = "";
        public string YemekOnerileri { get; set; } = "";
        public List<string> Ilceler { get; set; } = new();
        public string GezilenYerler { get; set; } = "";
        public string Oneriler { get; set; } = "";
    }
} 